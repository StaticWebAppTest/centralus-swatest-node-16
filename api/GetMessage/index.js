module.exports = async function (context, req) {
  const date = "2024-08-27T12:20:03.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

