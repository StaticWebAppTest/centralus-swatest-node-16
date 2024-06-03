module.exports = async function (context, req) {
  const date = "2024-06-03T19:08:50.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

