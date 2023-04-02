module.exports = async function (context, req) {
  const date = "2023-04-02T19:06:27.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

