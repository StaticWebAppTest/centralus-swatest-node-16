module.exports = async function (context, req) {
  const date = "2022-04-16T12:16:58.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

