module.exports = async function (context, req) {
  const date = "2024-03-23T06:15:29.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

