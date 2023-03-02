module.exports = async function (context, req) {
  const date = "2023-03-02T00:58:23.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

