module.exports = async function (context, req) {
  const date = "2025-01-24T21:10:09.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

