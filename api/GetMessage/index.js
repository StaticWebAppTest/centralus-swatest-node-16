module.exports = async function (context, req) {
  const date = "2022-11-02T03:52:15.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

