module.exports = async function (context, req) {
  const date = "2022-03-14T22:10:22.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

