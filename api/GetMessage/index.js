module.exports = async function (context, req) {
  const date = "2024-06-17T06:15:03.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

