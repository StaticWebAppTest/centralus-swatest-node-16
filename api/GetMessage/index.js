module.exports = async function (context, req) {
  const date = "2022-08-16T05:14:47.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

