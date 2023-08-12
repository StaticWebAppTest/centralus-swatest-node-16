module.exports = async function (context, req) {
  const date = "2023-08-12T22:06:50.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

