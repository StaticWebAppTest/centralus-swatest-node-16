module.exports = async function (context, req) {
  const date = "2025-04-19T15:11:28.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

