module.exports = async function (context, req) {
  const date = "2024-09-03T10:11:49.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

