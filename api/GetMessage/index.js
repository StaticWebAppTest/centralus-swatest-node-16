module.exports = async function (context, req) {
  const date = "2024-08-02T05:11:14.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

