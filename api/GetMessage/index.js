module.exports = async function (context, req) {
  const date = "2022-11-14T10:13:34.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

