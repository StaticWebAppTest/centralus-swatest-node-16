module.exports = async function (context, req) {
  const date = "2023-04-24T03:09:38.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

