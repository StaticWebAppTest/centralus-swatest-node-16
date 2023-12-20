module.exports = async function (context, req) {
  const date = "2023-12-20T05:07:23.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

