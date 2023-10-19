module.exports = async function (context, req) {
  const date = "2023-10-19T02:16:46.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

