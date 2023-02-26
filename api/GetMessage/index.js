module.exports = async function (context, req) {
  const date = "2023-02-26T07:08:55.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

