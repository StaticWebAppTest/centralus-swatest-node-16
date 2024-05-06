module.exports = async function (context, req) {
  const date = "2024-05-06T00:44:26.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

