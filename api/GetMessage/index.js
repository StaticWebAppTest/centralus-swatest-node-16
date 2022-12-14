module.exports = async function (context, req) {
  const date = "2022-12-14T18:12:22.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

