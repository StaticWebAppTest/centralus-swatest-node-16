module.exports = async function (context, req) {
  const date = "2023-11-21T23:09:37.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

