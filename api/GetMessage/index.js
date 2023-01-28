module.exports = async function (context, req) {
  const date = "2023-01-28T07:08:17.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

