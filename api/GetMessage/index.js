module.exports = async function (context, req) {
  const date = "2024-03-20T13:11:54.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

