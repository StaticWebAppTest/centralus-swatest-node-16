module.exports = async function (context, req) {
  const date = "2023-08-21T04:10:21.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

