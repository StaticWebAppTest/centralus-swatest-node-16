module.exports = async function (context, req) {
  const date = "2025-04-18T14:11:39.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

