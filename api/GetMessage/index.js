module.exports = async function (context, req) {
  const date = "2024-06-05T11:08:28.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

