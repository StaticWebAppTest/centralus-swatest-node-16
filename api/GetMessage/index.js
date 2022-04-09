module.exports = async function (context, req) {
  const date = "2022-04-09T18:11:46.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

