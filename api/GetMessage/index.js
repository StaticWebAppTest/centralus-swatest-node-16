module.exports = async function (context, req) {
  const date = "2023-06-07T12:18:09.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

