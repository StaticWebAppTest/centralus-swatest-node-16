module.exports = async function (context, req) {
  const date = "2023-09-28T03:09:08.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

