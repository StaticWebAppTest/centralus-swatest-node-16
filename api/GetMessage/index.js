module.exports = async function (context, req) {
  const date = "2023-07-30T19:06:22.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

