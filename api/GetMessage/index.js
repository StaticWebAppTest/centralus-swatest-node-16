module.exports = async function (context, req) {
  const date = "2023-08-19T07:07:18.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

