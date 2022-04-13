module.exports = async function (context, req) {
  const date = "2022-04-13T19:09:14.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

