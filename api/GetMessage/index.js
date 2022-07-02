module.exports = async function (context, req) {
  const date = "2022-07-02T08:12:47.517Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

