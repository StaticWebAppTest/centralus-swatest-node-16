module.exports = async function (context, req) {
  const date = "2022-11-14T21:10:54.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

