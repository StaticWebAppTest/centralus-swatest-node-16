module.exports = async function (context, req) {
  const date = "2023-12-20T13:08:51.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

