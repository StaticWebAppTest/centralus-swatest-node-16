module.exports = async function (context, req) {
  const date = "2022-07-03T18:11:42.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

