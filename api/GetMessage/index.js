module.exports = async function (context, req) {
  const date = "2023-10-15T11:06:56.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

