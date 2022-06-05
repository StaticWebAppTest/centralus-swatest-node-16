module.exports = async function (context, req) {
  const date = "2022-06-05T22:09:16.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

