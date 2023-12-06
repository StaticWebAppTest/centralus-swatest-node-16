module.exports = async function (context, req) {
  const date = "2023-12-06T10:10:05.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

