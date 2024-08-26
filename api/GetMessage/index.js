module.exports = async function (context, req) {
  const date = "2024-08-26T15:11:04.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

