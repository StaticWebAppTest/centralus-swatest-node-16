module.exports = async function (context, req) {
  const date = "2024-12-13T08:17:03.194Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

