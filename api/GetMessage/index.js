module.exports = async function (context, req) {
  const date = "2023-11-22T16:12:08.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

