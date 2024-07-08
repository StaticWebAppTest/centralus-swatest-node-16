module.exports = async function (context, req) {
  const date = "2024-07-08T18:13:42.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

