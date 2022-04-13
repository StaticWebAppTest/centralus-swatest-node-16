module.exports = async function (context, req) {
  const date = "2022-04-13T07:11:12.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

