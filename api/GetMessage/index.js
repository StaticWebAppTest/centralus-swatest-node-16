module.exports = async function (context, req) {
  const date = "2024-07-03T07:09:59.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

