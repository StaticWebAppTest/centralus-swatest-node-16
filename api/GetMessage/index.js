module.exports = async function (context, req) {
  const date = "2022-08-29T20:12:19.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

