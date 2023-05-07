module.exports = async function (context, req) {
  const date = "2023-05-07T10:08:31.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

