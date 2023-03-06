module.exports = async function (context, req) {
  const date = "2023-03-06T13:20:19.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

