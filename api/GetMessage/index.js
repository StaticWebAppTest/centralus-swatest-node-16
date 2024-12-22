module.exports = async function (context, req) {
  const date = "2024-12-22T21:09:44.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

