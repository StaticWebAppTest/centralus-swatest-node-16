module.exports = async function (context, req) {
  const date = "2023-03-26T15:08:26.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

