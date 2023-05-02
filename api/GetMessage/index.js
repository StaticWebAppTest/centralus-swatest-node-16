module.exports = async function (context, req) {
  const date = "2023-05-02T09:08:57.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

