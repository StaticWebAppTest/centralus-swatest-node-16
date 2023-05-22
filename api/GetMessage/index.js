module.exports = async function (context, req) {
  const date = "2023-05-22T07:09:09.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

