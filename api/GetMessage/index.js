module.exports = async function (context, req) {
  const date = "2024-01-12T08:12:27.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

