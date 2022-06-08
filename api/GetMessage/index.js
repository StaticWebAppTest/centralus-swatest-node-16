module.exports = async function (context, req) {
  const date = "2022-06-08T17:13:00.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

