module.exports = async function (context, req) {
  const date = "2022-04-04T06:13:16.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

