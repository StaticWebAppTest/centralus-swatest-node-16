module.exports = async function (context, req) {
  const date = "2024-12-07T13:19:04.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

