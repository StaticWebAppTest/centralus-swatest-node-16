module.exports = async function (context, req) {
  const date = "2023-04-02T13:09:43.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

