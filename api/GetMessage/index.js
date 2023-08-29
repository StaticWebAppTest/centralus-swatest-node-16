module.exports = async function (context, req) {
  const date = "2023-08-29T10:09:20.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

