module.exports = async function (context, req) {
  const date = "2024-10-28T02:22:34.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

