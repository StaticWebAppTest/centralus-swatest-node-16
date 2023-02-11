module.exports = async function (context, req) {
  const date = "2023-02-11T22:08:31.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

