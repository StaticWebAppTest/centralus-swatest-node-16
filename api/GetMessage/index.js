module.exports = async function (context, req) {
  const date = "2023-11-02T20:09:21.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

