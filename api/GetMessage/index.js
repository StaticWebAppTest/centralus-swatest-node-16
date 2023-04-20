module.exports = async function (context, req) {
  const date = "2023-04-20T17:07:48.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

