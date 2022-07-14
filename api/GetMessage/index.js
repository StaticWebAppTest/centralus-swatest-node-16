module.exports = async function (context, req) {
  const date = "2022-07-14T05:25:22.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

