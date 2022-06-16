module.exports = async function (context, req) {
  const date = "2022-06-16T16:16:04.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

