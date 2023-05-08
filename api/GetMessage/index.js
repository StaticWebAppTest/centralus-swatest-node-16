module.exports = async function (context, req) {
  const date = "2023-05-08T17:07:49.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

