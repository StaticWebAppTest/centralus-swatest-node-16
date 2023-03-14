module.exports = async function (context, req) {
  const date = "2023-03-14T17:13:41.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

