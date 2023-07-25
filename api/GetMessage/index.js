module.exports = async function (context, req) {
  const date = "2023-07-25T19:05:51.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

