module.exports = async function (context, req) {
  const date = "2023-07-19T21:07:46.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

