module.exports = async function (context, req) {
  const date = "2023-07-28T10:09:04.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

