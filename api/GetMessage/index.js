module.exports = async function (context, req) {
  const date = "2022-04-20T00:58:49.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

