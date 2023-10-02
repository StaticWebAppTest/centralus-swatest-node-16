module.exports = async function (context, req) {
  const date = "2023-10-02T19:06:58.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

