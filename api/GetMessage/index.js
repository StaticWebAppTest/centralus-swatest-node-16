module.exports = async function (context, req) {
  const date = "2022-09-02T17:17:09.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

