module.exports = async function (context, req) {
  const date = "2024-06-12T10:11:07.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

