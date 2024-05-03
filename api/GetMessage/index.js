module.exports = async function (context, req) {
  const date = "2024-05-03T23:09:51.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

