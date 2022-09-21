module.exports = async function (context, req) {
  const date = "2022-09-21T23:12:32.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

