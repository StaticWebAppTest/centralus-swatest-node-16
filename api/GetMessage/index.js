module.exports = async function (context, req) {
  const date = "2023-12-08T07:08:51.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

