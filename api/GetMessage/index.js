module.exports = async function (context, req) {
  const date = "2024-04-08T07:10:36.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

