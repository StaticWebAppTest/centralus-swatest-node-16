module.exports = async function (context, req) {
  const date = "2023-09-08T11:06:56.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

