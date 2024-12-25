module.exports = async function (context, req) {
  const date = "2024-12-25T07:11:14.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

