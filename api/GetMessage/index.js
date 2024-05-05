module.exports = async function (context, req) {
  const date = "2024-05-05T11:07:57.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

