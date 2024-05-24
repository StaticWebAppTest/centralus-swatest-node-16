module.exports = async function (context, req) {
  const date = "2024-05-24T08:12:34.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

