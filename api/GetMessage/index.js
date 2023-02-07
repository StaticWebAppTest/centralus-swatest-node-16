module.exports = async function (context, req) {
  const date = "2023-02-07T10:10:32.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

