module.exports = async function (context, req) {
  const date = "2024-08-06T10:11:56.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

