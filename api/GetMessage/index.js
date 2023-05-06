module.exports = async function (context, req) {
  const date = "2023-05-06T05:07:47.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

