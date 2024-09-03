module.exports = async function (context, req) {
  const date = "2024-09-03T13:17:38.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

