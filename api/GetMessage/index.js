module.exports = async function (context, req) {
  const date = "2023-12-27T19:07:06.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

