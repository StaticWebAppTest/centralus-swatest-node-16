module.exports = async function (context, req) {
  const date = "2024-01-21T18:11:13.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

