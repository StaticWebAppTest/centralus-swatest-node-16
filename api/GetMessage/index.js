module.exports = async function (context, req) {
  const date = "2022-03-02T16:17:25.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

