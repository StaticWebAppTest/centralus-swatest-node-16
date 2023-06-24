module.exports = async function (context, req) {
  const date = "2023-06-24T11:07:55.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

