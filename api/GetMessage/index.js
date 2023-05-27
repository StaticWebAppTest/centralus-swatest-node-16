module.exports = async function (context, req) {
  const date = "2023-05-27T19:06:28.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

