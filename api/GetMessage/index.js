module.exports = async function (context, req) {
  const date = "2024-12-23T19:08:55.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

