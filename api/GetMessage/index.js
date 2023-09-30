module.exports = async function (context, req) {
  const date = "2023-09-30T02:13:49.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

