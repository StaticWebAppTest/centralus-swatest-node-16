module.exports = async function (context, req) {
  const date = "2022-08-27T22:10:06.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

