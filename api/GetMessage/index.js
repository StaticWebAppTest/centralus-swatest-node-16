module.exports = async function (context, req) {
  const date = "2024-05-09T23:09:39.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

