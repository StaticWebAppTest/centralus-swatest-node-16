module.exports = async function (context, req) {
  const date = "2023-06-23T02:34:11.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

