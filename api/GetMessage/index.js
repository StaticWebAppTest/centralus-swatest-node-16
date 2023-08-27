module.exports = async function (context, req) {
  const date = "2023-08-27T07:07:22.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

