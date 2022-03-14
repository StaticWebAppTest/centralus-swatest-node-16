module.exports = async function (context, req) {
  const date = "2022-03-14T05:31:27.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

