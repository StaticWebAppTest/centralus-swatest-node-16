module.exports = async function (context, req) {
  const date = "2025-12-04T13:31:28.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

