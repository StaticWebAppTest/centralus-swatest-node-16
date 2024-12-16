module.exports = async function (context, req) {
  const date = "2024-12-16T12:25:40.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

