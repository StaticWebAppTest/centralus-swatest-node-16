module.exports = async function (context, req) {
  const date = "2023-02-17T19:08:03.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

