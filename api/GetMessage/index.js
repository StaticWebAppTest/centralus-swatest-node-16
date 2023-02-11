module.exports = async function (context, req) {
  const date = "2023-02-11T21:08:11.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

