module.exports = async function (context, req) {
  const date = "2022-11-14T23:11:06.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

