module.exports = async function (context, req) {
  const date = "2023-02-13T11:08:45.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

