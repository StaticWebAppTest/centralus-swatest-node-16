module.exports = async function (context, req) {
  const date = "2023-08-20T13:08:33.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

