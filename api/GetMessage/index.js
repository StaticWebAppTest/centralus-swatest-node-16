module.exports = async function (context, req) {
  const date = "2023-06-02T06:11:27.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

