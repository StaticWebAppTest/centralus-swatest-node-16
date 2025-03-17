module.exports = async function (context, req) {
  const date = "2025-03-17T13:22:26.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

