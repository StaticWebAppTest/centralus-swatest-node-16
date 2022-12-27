module.exports = async function (context, req) {
  const date = "2022-12-27T08:12:13.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

