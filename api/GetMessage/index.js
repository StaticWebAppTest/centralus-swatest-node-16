module.exports = async function (context, req) {
  const date = "2022-05-30T22:11:35.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

