module.exports = async function (context, req) {
  const date = "2024-05-06T17:09:53.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

