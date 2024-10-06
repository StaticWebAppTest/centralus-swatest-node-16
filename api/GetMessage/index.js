module.exports = async function (context, req) {
  const date = "2024-10-06T01:00:48.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

