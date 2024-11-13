module.exports = async function (context, req) {
  const date = "2024-11-13T08:15:37.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

