module.exports = async function (context, req) {
  const date = "2023-09-24T08:09:59.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

