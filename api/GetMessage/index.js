module.exports = async function (context, req) {
  const date = "2023-05-11T22:07:55.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

