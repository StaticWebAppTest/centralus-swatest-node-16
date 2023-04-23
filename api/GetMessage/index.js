module.exports = async function (context, req) {
  const date = "2023-04-23T07:07:39.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

