module.exports = async function (context, req) {
  const date = "2023-05-29T09:09:18.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

