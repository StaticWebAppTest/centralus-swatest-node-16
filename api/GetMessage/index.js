module.exports = async function (context, req) {
  const date = "2023-04-30T19:06:41.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

