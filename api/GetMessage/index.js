module.exports = async function (context, req) {
  const date = "2024-12-18T08:16:27.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

