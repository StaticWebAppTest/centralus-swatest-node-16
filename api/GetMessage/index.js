module.exports = async function (context, req) {
  const date = "2024-07-14T21:09:12.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

