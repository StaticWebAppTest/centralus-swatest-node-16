module.exports = async function (context, req) {
  const date = "2022-09-27T01:12:16.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

