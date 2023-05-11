module.exports = async function (context, req) {
  const date = "2023-05-11T21:07:56.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

