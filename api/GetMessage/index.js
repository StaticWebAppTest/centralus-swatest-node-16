module.exports = async function (context, req) {
  const date = "2022-06-20T13:32:21.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

