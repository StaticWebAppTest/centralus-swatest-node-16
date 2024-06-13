module.exports = async function (context, req) {
  const date = "2024-06-13T06:14:03.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

