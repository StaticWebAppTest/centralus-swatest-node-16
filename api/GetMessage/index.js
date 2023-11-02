module.exports = async function (context, req) {
  const date = "2023-11-02T07:08:44.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

