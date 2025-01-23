module.exports = async function (context, req) {
  const date = "2025-01-23T02:10:28.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

