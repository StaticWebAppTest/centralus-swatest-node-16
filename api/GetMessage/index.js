module.exports = async function (context, req) {
  const date = "2022-09-02T18:15:12.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

