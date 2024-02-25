module.exports = async function (context, req) {
  const date = "2024-02-25T21:09:06.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

