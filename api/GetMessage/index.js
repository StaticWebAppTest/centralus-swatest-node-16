module.exports = async function (context, req) {
  const date = "2024-11-25T14:11:49.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

