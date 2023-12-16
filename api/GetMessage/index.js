module.exports = async function (context, req) {
  const date = "2023-12-16T01:49:16.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

