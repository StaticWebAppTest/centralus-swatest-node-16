module.exports = async function (context, req) {
  const date = "2024-12-25T15:11:16.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

