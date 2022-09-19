module.exports = async function (context, req) {
  const date = "2022-09-19T17:27:36.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

