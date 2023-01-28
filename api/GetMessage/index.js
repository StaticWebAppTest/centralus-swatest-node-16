module.exports = async function (context, req) {
  const date = "2023-01-28T19:06:55.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

