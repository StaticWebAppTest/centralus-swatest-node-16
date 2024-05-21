module.exports = async function (context, req) {
  const date = "2024-05-21T10:10:21.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

