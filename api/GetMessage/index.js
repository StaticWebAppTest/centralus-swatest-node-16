module.exports = async function (context, req) {
  const date = "2024-08-06T15:12:00.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

