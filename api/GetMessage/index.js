module.exports = async function (context, req) {
  const date = "2024-11-14T22:11:24.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

