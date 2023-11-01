module.exports = async function (context, req) {
  const date = "2023-11-01T19:07:09.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

