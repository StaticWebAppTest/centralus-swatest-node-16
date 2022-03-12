module.exports = async function (context, req) {
  const date = "2022-03-12T16:12:52.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

