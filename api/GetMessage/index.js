module.exports = async function (context, req) {
  const date = "2023-02-22T14:09:19.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

