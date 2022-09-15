module.exports = async function (context, req) {
  const date = "2022-09-15T21:12:06.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

