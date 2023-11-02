module.exports = async function (context, req) {
  const date = "2023-11-02T16:11:49.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

