module.exports = async function (context, req) {
  const date = "2025-05-06T04:16:30.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

