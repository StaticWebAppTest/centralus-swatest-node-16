module.exports = async function (context, req) {
  const date = "2023-10-09T02:16:29.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

