module.exports = async function (context, req) {
  const date = "2024-11-16T20:12:05.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

