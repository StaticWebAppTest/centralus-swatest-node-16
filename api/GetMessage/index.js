module.exports = async function (context, req) {
  const date = "2024-03-30T06:11:09.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

