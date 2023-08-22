module.exports = async function (context, req) {
  const date = "2023-08-22T14:08:03.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

