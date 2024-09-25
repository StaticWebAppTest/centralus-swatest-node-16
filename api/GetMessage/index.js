module.exports = async function (context, req) {
  const date = "2024-09-25T09:12:39.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

