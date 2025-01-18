module.exports = async function (context, req) {
  const date = "2025-01-18T18:13:52.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

