module.exports = async function (context, req) {
  const date = "2024-06-06T20:12:13.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

