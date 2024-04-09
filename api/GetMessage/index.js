module.exports = async function (context, req) {
  const date = "2024-04-09T17:08:36.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

