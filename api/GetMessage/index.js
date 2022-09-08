module.exports = async function (context, req) {
  const date = "2022-09-08T08:14:48.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

