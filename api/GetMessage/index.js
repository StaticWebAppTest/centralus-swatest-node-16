module.exports = async function (context, req) {
  const date = "2023-03-02T13:20:07.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

