module.exports = async function (context, req) {
  const date = "2024-03-19T08:11:46.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

