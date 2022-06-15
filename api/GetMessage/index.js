module.exports = async function (context, req) {
  const date = "2022-06-15T19:09:22.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

