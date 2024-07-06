module.exports = async function (context, req) {
  const date = "2024-07-06T14:08:18.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

