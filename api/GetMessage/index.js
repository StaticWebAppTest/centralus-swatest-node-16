module.exports = async function (context, req) {
  const date = "2022-10-15T05:42:05.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

