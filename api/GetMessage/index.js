module.exports = async function (context, req) {
  const date = "2023-06-16T19:06:46.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

