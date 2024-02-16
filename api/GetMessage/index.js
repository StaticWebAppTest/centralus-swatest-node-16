module.exports = async function (context, req) {
  const date = "2024-02-16T20:08:56.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

