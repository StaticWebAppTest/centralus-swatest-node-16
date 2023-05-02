module.exports = async function (context, req) {
  const date = "2023-05-02T10:09:43.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

