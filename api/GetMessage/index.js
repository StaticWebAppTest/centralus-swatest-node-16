module.exports = async function (context, req) {
  const date = "2023-08-28T20:08:56.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

