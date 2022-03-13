module.exports = async function (context, req) {
  const date = "2022-03-13T16:13:46.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

