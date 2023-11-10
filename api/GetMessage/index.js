module.exports = async function (context, req) {
  const date = "2023-11-10T19:07:01.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

