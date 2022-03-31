module.exports = async function (context, req) {
  const date = "2022-03-31T19:08:41.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

