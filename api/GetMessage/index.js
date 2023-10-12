module.exports = async function (context, req) {
  const date = "2023-10-12T21:07:13.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

