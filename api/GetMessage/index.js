module.exports = async function (context, req) {
  const date = "2023-06-22T00:54:38.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

