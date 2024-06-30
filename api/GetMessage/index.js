module.exports = async function (context, req) {
  const date = "2024-06-30T14:09:06.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

