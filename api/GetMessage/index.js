module.exports = async function (context, req) {
  const date = "2023-11-01T20:09:19.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

