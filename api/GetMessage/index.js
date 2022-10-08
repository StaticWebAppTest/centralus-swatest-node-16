module.exports = async function (context, req) {
  const date = "2022-10-08T10:13:16.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

