module.exports = async function (context, req) {
  const date = "2022-05-26T12:20:27.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

