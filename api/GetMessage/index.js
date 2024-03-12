module.exports = async function (context, req) {
  const date = "2024-03-12T08:11:24.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

