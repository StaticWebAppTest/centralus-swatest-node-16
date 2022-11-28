module.exports = async function (context, req) {
  const date = "2022-11-28T19:08:31.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

