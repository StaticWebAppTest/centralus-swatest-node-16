module.exports = async function (context, req) {
  const date = "2024-01-08T01:53:09.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

