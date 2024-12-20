module.exports = async function (context, req) {
  const date = "2024-12-20T21:10:09.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

