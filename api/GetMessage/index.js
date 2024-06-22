module.exports = async function (context, req) {
  const date = "2024-06-22T17:08:20.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

