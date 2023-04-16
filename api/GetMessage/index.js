module.exports = async function (context, req) {
  const date = "2023-04-16T05:08:09.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

