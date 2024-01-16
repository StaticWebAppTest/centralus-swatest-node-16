module.exports = async function (context, req) {
  const date = "2024-01-16T17:08:30.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

