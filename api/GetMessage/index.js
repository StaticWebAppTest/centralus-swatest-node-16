module.exports = async function (context, req) {
  const date = "2023-07-21T10:09:17.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

