module.exports = async function (context, req) {
  const date = "2024-06-07T11:09:47.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

