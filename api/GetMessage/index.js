module.exports = async function (context, req) {
  const date = "2022-04-29T18:14:01.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

