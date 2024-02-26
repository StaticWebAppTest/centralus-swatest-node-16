module.exports = async function (context, req) {
  const date = "2024-02-26T13:09:15.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

