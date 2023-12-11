module.exports = async function (context, req) {
  const date = "2023-12-11T09:10:29.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

