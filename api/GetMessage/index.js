module.exports = async function (context, req) {
  const date = "2023-08-30T14:08:00.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

