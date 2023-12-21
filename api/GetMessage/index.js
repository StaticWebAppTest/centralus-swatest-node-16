module.exports = async function (context, req) {
  const date = "2023-12-21T22:08:00.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

