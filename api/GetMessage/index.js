module.exports = async function (context, req) {
  const date = "2023-06-26T11:08:39.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

