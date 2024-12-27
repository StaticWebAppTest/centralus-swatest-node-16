module.exports = async function (context, req) {
  const date = "2024-12-27T14:10:39.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

