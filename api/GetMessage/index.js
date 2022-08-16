module.exports = async function (context, req) {
  const date = "2022-08-16T03:39:27.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

