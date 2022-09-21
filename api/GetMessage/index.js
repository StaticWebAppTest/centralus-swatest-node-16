module.exports = async function (context, req) {
  const date = "2022-09-21T08:19:48.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

