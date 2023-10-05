module.exports = async function (context, req) {
  const date = "2023-10-05T07:08:32.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

