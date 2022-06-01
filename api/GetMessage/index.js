module.exports = async function (context, req) {
  const date = "2022-06-01T15:13:13.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

