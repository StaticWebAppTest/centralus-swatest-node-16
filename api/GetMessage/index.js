module.exports = async function (context, req) {
  const date = "2022-07-26T10:12:30.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

