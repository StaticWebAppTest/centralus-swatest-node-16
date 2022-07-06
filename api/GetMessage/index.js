module.exports = async function (context, req) {
  const date = "2022-07-06T15:12:22.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

