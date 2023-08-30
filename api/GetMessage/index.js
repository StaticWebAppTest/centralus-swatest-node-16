module.exports = async function (context, req) {
  const date = "2023-08-30T12:15:59.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

