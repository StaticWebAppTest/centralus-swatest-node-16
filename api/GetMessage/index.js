module.exports = async function (context, req) {
  const date = "2022-04-27T06:13:44.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

