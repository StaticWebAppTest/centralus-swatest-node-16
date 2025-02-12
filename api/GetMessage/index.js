module.exports = async function (context, req) {
  const date = "2025-02-12T10:12:25.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

