module.exports = async function (context, req) {
  const date = "2024-11-06T02:12:00.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

