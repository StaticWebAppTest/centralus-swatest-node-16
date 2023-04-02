module.exports = async function (context, req) {
  const date = "2023-04-02T21:07:07.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

