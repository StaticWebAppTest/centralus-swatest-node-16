module.exports = async function (context, req) {
  const date = "2023-05-13T14:06:59.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

