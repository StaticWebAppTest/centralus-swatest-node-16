module.exports = async function (context, req) {
  const date = "2024-06-22T00:46:15.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

