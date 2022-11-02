module.exports = async function (context, req) {
  const date = "2022-11-02T08:16:04.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

