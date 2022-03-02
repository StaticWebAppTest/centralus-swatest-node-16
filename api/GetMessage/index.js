module.exports = async function (context, req) {
  const date = "2022-03-02T13:15:42.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

