module.exports = async function (context, req) {
  const date = "2023-05-31T06:11:35.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

