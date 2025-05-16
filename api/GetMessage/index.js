module.exports = async function (context, req) {
  const date = "2025-05-16T12:26:54.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

