module.exports = async function (context, req) {
  const date = "2023-09-02T19:06:09.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

