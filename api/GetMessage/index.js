module.exports = async function (context, req) {
  const date = "2024-12-10T15:13:28.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

