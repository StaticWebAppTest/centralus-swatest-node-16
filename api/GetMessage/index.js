module.exports = async function (context, req) {
  const date = "2023-07-22T19:06:20.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

