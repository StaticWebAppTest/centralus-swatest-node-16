module.exports = async function (context, req) {
  const date = "2023-11-28T22:08:31.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

