module.exports = async function (context, req) {
  const date = "2025-04-25T19:10:32.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

