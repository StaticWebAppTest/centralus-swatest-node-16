module.exports = async function (context, req) {
  const date = "2023-01-30T11:08:14.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

