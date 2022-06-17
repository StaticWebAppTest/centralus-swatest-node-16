module.exports = async function (context, req) {
  const date = "2022-06-17T15:11:24.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

