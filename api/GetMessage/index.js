module.exports = async function (context, req) {
  const date = "2023-09-02T02:11:40.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

