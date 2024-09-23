module.exports = async function (context, req) {
  const date = "2024-09-23T09:14:28.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

