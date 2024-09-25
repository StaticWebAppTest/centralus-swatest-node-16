module.exports = async function (context, req) {
  const date = "2024-09-25T03:19:26.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

