module.exports = async function (context, req) {
  const date = "2023-02-14T19:08:05.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

