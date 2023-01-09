module.exports = async function (context, req) {
  const date = "2023-01-09T14:11:49.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

