module.exports = async function (context, req) {
  const date = "2022-11-02T17:26:12.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

