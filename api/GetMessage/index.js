module.exports = async function (context, req) {
  const date = "2022-03-20T00:42:28.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

