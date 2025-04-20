module.exports = async function (context, req) {
  const date = "2025-04-20T12:22:20.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

