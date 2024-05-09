module.exports = async function (context, req) {
  const date = "2024-05-09T12:17:20.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

