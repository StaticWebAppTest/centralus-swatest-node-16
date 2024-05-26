module.exports = async function (context, req) {
  const date = "2024-05-26T07:09:42.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

