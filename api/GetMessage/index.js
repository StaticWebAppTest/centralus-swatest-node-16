module.exports = async function (context, req) {
  const date = "2022-10-16T22:12:14.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

