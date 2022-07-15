module.exports = async function (context, req) {
  const date = "2022-07-15T10:12:00.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

