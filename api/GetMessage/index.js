module.exports = async function (context, req) {
  const date = "2024-08-06T00:50:37.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

