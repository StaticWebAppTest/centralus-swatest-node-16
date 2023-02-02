module.exports = async function (context, req) {
  const date = "2023-02-02T09:09:49.743Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

