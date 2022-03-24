module.exports = async function (context, req) {
  const date = "2022-03-24T15:11:08.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

