module.exports = async function (context, req) {
  const date = "2024-05-21T07:09:13.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

