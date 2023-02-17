module.exports = async function (context, req) {
  const date = "2023-02-17T12:18:17.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

