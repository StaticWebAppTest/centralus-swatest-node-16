module.exports = async function (context, req) {
  const date = "2023-01-27T16:12:28.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

