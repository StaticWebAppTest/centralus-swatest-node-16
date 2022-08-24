module.exports = async function (context, req) {
  const date = "2022-08-24T06:16:05.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

