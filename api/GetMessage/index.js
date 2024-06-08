module.exports = async function (context, req) {
  const date = "2024-06-08T00:46:14.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

