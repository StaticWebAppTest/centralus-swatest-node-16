module.exports = async function (context, req) {
  const date = "2024-06-12T14:09:14.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

