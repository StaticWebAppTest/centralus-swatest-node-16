module.exports = async function (context, req) {
  const date = "2023-05-24T10:09:40.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

