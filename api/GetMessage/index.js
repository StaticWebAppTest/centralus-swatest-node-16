module.exports = async function (context, req) {
  const date = "2022-03-23T14:09:41.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

