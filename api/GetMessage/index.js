module.exports = async function (context, req) {
  const date = "2024-04-25T06:12:37.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

