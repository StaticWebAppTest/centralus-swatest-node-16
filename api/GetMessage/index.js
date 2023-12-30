module.exports = async function (context, req) {
  const date = "2023-12-30T07:07:42.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

