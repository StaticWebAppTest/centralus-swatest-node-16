module.exports = async function (context, req) {
  const date = "2025-05-17T17:10:49.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

