module.exports = async function (context, req) {
  const date = "2023-01-02T18:11:23.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

