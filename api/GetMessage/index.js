module.exports = async function (context, req) {
  const date = "2024-08-14T16:14:33.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

