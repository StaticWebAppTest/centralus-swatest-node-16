module.exports = async function (context, req) {
  const date = "2025-03-27T11:10:37.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

