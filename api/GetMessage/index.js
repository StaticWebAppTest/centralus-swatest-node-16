module.exports = async function (context, req) {
  const date = "2022-09-23T20:13:22.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

