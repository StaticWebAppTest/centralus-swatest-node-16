module.exports = async function (context, req) {
  const date = "2023-02-03T05:09:21.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

