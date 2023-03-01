module.exports = async function (context, req) {
  const date = "2023-03-01T19:08:22.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

