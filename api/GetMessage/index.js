module.exports = async function (context, req) {
  const date = "2024-07-12T07:10:56.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

