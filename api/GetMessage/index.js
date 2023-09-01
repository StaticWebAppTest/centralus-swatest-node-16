module.exports = async function (context, req) {
  const date = "2023-09-01T02:19:18.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

