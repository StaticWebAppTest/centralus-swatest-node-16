module.exports = async function (context, req) {
  const date = "2023-09-24T05:07:56.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

