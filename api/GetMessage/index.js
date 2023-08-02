module.exports = async function (context, req) {
  const date = "2023-08-02T23:08:01.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

