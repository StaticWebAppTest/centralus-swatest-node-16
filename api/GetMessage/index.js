module.exports = async function (context, req) {
  const date = "2023-09-21T22:08:01.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

