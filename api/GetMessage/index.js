module.exports = async function (context, req) {
  const date = "2023-09-30T04:09:59.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

