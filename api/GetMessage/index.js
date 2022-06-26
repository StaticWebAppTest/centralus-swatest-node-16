module.exports = async function (context, req) {
  const date = "2022-06-26T15:10:04.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

