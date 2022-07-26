module.exports = async function (context, req) {
  const date = "2022-07-26T13:35:04.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

