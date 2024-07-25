module.exports = async function (context, req) {
  const date = "2024-07-25T17:09:22.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

