module.exports = async function (context, req) {
  const date = "2025-02-28T23:11:15.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

