module.exports = async function (context, req) {
  const date = "2023-09-26T06:12:06.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

