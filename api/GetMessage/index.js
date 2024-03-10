module.exports = async function (context, req) {
  const date = "2024-03-10T07:08:35.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

