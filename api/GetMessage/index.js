module.exports = async function (context, req) {
  const date = "2022-05-09T07:10:58.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

