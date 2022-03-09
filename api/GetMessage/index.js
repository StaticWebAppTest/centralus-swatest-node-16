module.exports = async function (context, req) {
  const date = "2022-03-09T10:10:48.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

