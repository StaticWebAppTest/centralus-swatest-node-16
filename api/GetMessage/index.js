module.exports = async function (context, req) {
  const date = "2022-05-30T18:13:38.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

