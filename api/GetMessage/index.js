module.exports = async function (context, req) {
  const date = "2023-01-29T10:09:03.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

