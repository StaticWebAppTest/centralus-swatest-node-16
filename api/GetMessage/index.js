module.exports = async function (context, req) {
  const date = "2022-12-23T09:09:07.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

