module.exports = async function (context, req) {
  const date = "2022-09-12T15:13:29.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

