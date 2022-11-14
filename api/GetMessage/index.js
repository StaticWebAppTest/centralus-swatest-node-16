module.exports = async function (context, req) {
  const date = "2022-11-14T18:13:42.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

