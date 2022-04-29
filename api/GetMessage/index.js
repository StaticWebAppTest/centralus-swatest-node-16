module.exports = async function (context, req) {
  const date = "2022-04-29T16:19:12.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

