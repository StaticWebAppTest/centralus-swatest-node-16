module.exports = async function (context, req) {
  const date = "2024-06-27T07:09:50.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

