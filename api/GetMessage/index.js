module.exports = async function (context, req) {
  const date = "2023-05-28T22:07:36.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

