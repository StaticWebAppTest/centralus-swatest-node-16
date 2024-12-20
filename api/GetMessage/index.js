module.exports = async function (context, req) {
  const date = "2024-12-20T08:15:33.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

