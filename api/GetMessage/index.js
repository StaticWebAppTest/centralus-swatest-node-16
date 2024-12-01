module.exports = async function (context, req) {
  const date = "2024-12-01T11:09:34.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

