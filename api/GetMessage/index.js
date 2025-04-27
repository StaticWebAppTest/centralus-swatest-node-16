module.exports = async function (context, req) {
  const date = "2025-04-27T21:10:58.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

