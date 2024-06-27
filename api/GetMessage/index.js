module.exports = async function (context, req) {
  const date = "2024-06-27T17:11:25.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

