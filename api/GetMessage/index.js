module.exports = async function (context, req) {
  const date = "2022-08-13T16:13:20.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

