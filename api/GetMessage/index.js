module.exports = async function (context, req) {
  const date = "2023-03-02T12:18:03.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

