module.exports = async function (context, req) {
  const date = "2023-09-22T17:07:49.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

