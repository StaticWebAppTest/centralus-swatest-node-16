module.exports = async function (context, req) {
  const date = "2024-09-16T08:15:48.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

