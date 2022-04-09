module.exports = async function (context, req) {
  const date = "2022-04-09T02:19:15.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

