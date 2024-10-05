module.exports = async function (context, req) {
  const date = "2024-10-05T02:12:30.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

