module.exports = async function (context, req) {
  const date = "2023-02-20T14:09:23.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

