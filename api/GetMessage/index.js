module.exports = async function (context, req) {
  const date = "2023-05-23T02:02:25.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

