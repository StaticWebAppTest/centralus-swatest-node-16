module.exports = async function (context, req) {
  const date = "2025-02-19T23:11:07.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

