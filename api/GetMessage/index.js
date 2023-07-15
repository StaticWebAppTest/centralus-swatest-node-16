module.exports = async function (context, req) {
  const date = "2023-07-15T16:11:31.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

