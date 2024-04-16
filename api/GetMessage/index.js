module.exports = async function (context, req) {
  const date = "2024-04-16T20:09:19.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

