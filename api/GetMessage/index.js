module.exports = async function (context, req) {
  const date = "2024-07-31T19:08:40.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

