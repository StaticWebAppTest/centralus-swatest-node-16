module.exports = async function (context, req) {
  const date = "2022-11-14T05:18:54.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

