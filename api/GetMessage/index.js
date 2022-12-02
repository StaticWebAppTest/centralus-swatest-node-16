module.exports = async function (context, req) {
  const date = "2022-12-02T09:09:43.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

