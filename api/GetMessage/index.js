module.exports = async function (context, req) {
  const date = "2024-08-05T18:14:46.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

