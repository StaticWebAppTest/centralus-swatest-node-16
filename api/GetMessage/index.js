module.exports = async function (context, req) {
  const date = "2023-10-02T16:11:18.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

