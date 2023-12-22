module.exports = async function (context, req) {
  const date = "2023-12-22T01:48:30.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

