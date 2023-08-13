module.exports = async function (context, req) {
  const date = "2023-08-13T22:07:14.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

