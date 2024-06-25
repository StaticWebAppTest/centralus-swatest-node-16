module.exports = async function (context, req) {
  const date = "2024-06-25T06:14:27.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

