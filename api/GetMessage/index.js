module.exports = async function (context, req) {
  const date = "2023-11-22T19:07:38.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

