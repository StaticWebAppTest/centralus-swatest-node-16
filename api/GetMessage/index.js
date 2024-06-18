module.exports = async function (context, req) {
  const date = "2024-06-18T16:13:13.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

