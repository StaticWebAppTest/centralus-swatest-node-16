module.exports = async function (context, req) {
  const date = "2024-01-25T09:09:42.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

