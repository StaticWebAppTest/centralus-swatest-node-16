module.exports = async function (context, req) {
  const date = "2023-10-27T12:15:59.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

