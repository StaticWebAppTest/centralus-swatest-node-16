module.exports = async function (context, req) {
  const date = "2023-10-12T22:08:35.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

