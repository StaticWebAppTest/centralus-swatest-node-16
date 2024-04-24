module.exports = async function (context, req) {
  const date = "2024-04-24T06:14:38.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

