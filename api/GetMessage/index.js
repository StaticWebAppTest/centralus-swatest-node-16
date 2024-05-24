module.exports = async function (context, req) {
  const date = "2024-05-24T14:10:04.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

