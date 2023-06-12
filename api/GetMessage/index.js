module.exports = async function (context, req) {
  const date = "2023-06-12T14:08:08.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

