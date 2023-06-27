module.exports = async function (context, req) {
  const date = "2023-06-27T12:20:21.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

