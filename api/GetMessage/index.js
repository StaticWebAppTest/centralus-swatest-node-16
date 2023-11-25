module.exports = async function (context, req) {
  const date = "2023-11-25T16:10:18.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

