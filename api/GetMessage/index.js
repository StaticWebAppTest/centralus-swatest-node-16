module.exports = async function (context, req) {
  const date = "2024-10-10T15:12:11.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

