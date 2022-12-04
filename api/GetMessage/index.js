module.exports = async function (context, req) {
  const date = "2022-12-04T10:10:02.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

