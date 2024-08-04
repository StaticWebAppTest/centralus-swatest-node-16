module.exports = async function (context, req) {
  const date = "2024-08-04T20:11:37.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

