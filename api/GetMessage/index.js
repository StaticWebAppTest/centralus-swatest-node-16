module.exports = async function (context, req) {
  const date = "2022-04-05T07:10:47.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

