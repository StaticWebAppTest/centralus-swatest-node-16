module.exports = async function (context, req) {
  const date = "2023-12-07T21:08:22.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

