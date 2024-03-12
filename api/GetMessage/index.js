module.exports = async function (context, req) {
  const date = "2024-03-12T13:09:53.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

