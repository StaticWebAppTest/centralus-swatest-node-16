module.exports = async function (context, req) {
  const date = "2023-04-02T04:10:22.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

