module.exports = async function (context, req) {
  const date = "2024-03-20T09:09:49.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

