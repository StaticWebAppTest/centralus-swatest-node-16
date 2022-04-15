module.exports = async function (context, req) {
  const date = "2022-04-15T17:15:37.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

