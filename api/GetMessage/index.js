module.exports = async function (context, req) {
  const date = "2023-06-29T10:10:35.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

