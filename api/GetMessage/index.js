module.exports = async function (context, req) {
  const date = "2024-07-28T11:07:44.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

