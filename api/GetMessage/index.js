module.exports = async function (context, req) {
  const date = "2024-06-21T09:10:39.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

