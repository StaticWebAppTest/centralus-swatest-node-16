module.exports = async function (context, req) {
  const date = "2023-04-06T22:07:56.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

