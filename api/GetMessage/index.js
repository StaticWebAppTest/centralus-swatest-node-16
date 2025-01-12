module.exports = async function (context, req) {
  const date = "2025-01-12T21:10:05.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

