module.exports = async function (context, req) {
  const date = "2022-09-23T08:16:11.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

