module.exports = async function (context, req) {
  const date = "2025-05-16T11:11:23.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

