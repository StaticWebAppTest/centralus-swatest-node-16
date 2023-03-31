module.exports = async function (context, req) {
  const date = "2023-03-31T05:08:44.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

