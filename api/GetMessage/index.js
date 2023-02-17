module.exports = async function (context, req) {
  const date = "2023-02-17T06:13:15.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

