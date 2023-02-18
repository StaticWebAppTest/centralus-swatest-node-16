module.exports = async function (context, req) {
  const date = "2023-02-18T02:14:40.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

