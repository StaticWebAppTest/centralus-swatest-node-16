module.exports = async function (context, req) {
  const date = "2023-12-02T22:07:50.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

