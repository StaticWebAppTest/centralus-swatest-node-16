module.exports = async function (context, req) {
  const date = "2023-03-29T03:09:31.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

