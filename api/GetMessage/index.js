module.exports = async function (context, req) {
  const date = "2023-02-15T15:10:34.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

