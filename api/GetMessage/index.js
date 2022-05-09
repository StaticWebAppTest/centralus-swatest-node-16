module.exports = async function (context, req) {
  const date = "2022-05-09T18:13:24.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

