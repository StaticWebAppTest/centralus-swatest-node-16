module.exports = async function (context, req) {
  const date = "2024-02-24T14:07:10.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

