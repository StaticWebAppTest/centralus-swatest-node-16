module.exports = async function (context, req) {
  const date = "2023-09-02T06:10:26.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

