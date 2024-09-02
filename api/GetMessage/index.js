module.exports = async function (context, req) {
  const date = "2024-09-02T16:14:35.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

