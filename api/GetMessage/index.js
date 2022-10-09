module.exports = async function (context, req) {
  const date = "2022-10-09T15:14:06.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

