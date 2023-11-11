module.exports = async function (context, req) {
  const date = "2023-11-11T19:06:18.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

