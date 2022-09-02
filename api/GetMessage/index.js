module.exports = async function (context, req) {
  const date = "2022-09-02T14:10:05.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

