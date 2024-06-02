module.exports = async function (context, req) {
  const date = "2024-06-02T10:09:48.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

