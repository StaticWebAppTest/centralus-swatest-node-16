module.exports = async function (context, req) {
  const date = "2023-09-13T10:09:34.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

