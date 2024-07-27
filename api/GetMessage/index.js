module.exports = async function (context, req) {
  const date = "2024-07-27T13:11:27.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

