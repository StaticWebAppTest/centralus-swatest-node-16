module.exports = async function (context, req) {
  const date = "2023-06-26T15:09:49.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

