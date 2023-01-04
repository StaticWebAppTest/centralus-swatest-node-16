module.exports = async function (context, req) {
  const date = "2023-01-04T11:08:12.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

