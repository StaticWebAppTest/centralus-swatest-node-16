module.exports = async function (context, req) {
  const date = "2024-10-10T23:11:25.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

