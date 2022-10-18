module.exports = async function (context, req) {
  const date = "2022-10-18T21:11:57.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

