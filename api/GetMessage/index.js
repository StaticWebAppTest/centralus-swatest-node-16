module.exports = async function (context, req) {
  const date = "2022-10-02T16:16:34.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

