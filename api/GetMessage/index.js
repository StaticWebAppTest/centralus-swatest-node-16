module.exports = async function (context, req) {
  const date = "2024-12-06T09:13:35.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

