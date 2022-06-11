module.exports = async function (context, req) {
  const date = "2022-06-11T03:40:26.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

