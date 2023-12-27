module.exports = async function (context, req) {
  const date = "2023-12-27T04:11:11.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

