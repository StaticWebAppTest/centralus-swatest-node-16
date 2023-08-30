module.exports = async function (context, req) {
  const date = "2023-08-30T02:14:28.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

