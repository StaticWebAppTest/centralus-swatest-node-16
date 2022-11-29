module.exports = async function (context, req) {
  const date = "2022-11-29T15:10:49.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

