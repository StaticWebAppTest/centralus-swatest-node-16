module.exports = async function (context, req) {
  const date = "2024-05-29T10:11:04.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

