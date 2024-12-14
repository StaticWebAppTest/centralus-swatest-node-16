module.exports = async function (context, req) {
  const date = "2024-12-14T20:12:39.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

