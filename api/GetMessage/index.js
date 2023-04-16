module.exports = async function (context, req) {
  const date = "2023-04-16T19:06:43.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

