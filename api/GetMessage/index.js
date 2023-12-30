module.exports = async function (context, req) {
  const date = "2023-12-30T13:09:14.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

