module.exports = async function (context, req) {
  const date = "2022-09-16T16:16:14.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

