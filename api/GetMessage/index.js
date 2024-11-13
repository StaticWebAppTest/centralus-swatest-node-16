module.exports = async function (context, req) {
  const date = "2024-11-13T09:12:04.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

