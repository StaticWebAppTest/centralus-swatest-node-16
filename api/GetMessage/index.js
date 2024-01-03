module.exports = async function (context, req) {
  const date = "2024-01-03T01:50:19.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

