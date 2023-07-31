module.exports = async function (context, req) {
  const date = "2023-07-31T09:09:31.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

