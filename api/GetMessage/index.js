module.exports = async function (context, req) {
  const date = "2024-02-24T09:07:42.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

