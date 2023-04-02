module.exports = async function (context, req) {
  const date = "2023-04-02T02:01:51.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

