module.exports = async function (context, req) {
  const date = "2023-12-18T19:07:20.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

