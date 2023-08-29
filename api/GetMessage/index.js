module.exports = async function (context, req) {
  const date = "2023-08-29T14:08:01.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

