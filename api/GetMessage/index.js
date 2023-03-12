module.exports = async function (context, req) {
  const date = "2023-03-12T10:09:18.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

