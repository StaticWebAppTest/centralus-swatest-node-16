module.exports = async function (context, req) {
  const date = "2024-06-25T07:09:36.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

