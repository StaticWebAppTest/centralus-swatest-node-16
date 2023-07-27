module.exports = async function (context, req) {
  const date = "2023-07-27T10:09:08.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

