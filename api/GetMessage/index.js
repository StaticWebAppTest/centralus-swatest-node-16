module.exports = async function (context, req) {
  const date = "2024-05-03T15:10:26.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

