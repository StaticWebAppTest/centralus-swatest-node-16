module.exports = async function (context, req) {
  const date = "2022-04-16T05:09:18.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

