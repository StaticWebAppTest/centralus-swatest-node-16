module.exports = async function (context, req) {
  const date = "2024-04-20T06:10:59.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

