module.exports = async function (context, req) {
  const date = "2024-08-20T07:11:10.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

