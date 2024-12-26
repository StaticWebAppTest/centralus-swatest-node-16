module.exports = async function (context, req) {
  const date = "2024-12-26T04:14:28.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

