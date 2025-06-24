module.exports = async function (context, req) {
  const date = "2025-06-24T11:12:19.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

