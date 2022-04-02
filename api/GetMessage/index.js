module.exports = async function (context, req) {
  const date = "2022-04-02T10:10:44.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

