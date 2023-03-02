module.exports = async function (context, req) {
  const date = "2023-03-02T18:13:31.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

