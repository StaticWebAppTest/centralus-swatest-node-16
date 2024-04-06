module.exports = async function (context, req) {
  const date = "2024-04-06T06:11:36.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

