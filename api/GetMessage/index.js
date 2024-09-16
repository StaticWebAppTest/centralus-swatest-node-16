module.exports = async function (context, req) {
  const date = "2024-09-16T15:12:25.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

