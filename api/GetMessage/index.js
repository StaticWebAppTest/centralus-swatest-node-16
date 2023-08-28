module.exports = async function (context, req) {
  const date = "2023-08-28T08:11:42.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

