module.exports = async function (context, req) {
  const date = "2024-09-20T02:10:55.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

