module.exports = async function (context, req) {
  const date = "2023-01-02T15:09:36.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

