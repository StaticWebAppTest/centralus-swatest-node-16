module.exports = async function (context, req) {
  const date = "2023-11-09T19:06:54.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

