module.exports = async function (context, req) {
  const date = "2024-11-22T21:11:56.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

