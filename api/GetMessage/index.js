module.exports = async function (context, req) {
  const date = "2023-10-18T19:07:35.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

