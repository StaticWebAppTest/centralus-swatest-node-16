module.exports = async function (context, req) {
  const date = "2023-05-29T21:07:46.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

