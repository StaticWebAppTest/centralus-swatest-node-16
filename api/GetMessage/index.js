module.exports = async function (context, req) {
  const date = "2023-05-20T04:10:06.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

