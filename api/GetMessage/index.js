module.exports = async function (context, req) {
  const date = "2024-02-12T19:09:07.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

