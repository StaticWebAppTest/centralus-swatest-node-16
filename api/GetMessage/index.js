module.exports = async function (context, req) {
  const date = "2024-02-21T02:15:07.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

