module.exports = async function (context, req) {
  const date = "2024-04-04T07:09:04.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

