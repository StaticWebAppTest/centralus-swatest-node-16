module.exports = async function (context, req) {
  const date = "2023-08-20T07:07:03.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

