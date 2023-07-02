module.exports = async function (context, req) {
  const date = "2023-07-02T21:08:04.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

