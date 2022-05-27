module.exports = async function (context, req) {
  const date = "2022-05-27T15:11:34.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

