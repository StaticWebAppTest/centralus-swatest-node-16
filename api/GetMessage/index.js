module.exports = async function (context, req) {
  const date = "2024-03-03T01:42:49.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

