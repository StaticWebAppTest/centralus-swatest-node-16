module.exports = async function (context, req) {
  const date = "2022-10-08T16:16:31.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

