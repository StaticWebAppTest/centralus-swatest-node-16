module.exports = async function (context, req) {
  const date = "2022-05-13T22:10:34.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

