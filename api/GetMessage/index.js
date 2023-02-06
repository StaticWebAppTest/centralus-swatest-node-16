module.exports = async function (context, req) {
  const date = "2023-02-06T07:09:31.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

