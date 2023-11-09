module.exports = async function (context, req) {
  const date = "2023-11-09T08:11:33.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

