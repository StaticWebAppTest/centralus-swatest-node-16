module.exports = async function (context, req) {
  const date = "2024-04-27T07:08:03.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

