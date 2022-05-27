module.exports = async function (context, req) {
  const date = "2022-05-27T11:10:48.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

