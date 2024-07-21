module.exports = async function (context, req) {
  const date = "2024-07-21T07:08:54.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

