module.exports = async function (context, req) {
  const date = "2023-01-25T10:09:59.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

