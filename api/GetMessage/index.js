module.exports = async function (context, req) {
  const date = "2023-09-25T00:40:59.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

