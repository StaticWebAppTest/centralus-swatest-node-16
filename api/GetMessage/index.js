module.exports = async function (context, req) {
  const date = "2023-12-30T09:08:14.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

