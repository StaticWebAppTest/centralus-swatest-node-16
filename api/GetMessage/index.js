module.exports = async function (context, req) {
  const date = "2022-09-06T17:18:42.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

