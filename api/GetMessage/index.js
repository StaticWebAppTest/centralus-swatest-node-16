module.exports = async function (context, req) {
  const date = "2025-12-25T11:12:54.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

