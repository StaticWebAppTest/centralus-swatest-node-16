module.exports = async function (context, req) {
  const date = "2022-04-23T00:50:41.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

