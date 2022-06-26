module.exports = async function (context, req) {
  const date = "2022-06-26T10:10:43.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

