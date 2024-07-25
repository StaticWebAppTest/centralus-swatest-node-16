module.exports = async function (context, req) {
  const date = "2024-07-25T19:09:04.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

