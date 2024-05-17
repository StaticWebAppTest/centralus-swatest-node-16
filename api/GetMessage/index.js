module.exports = async function (context, req) {
  const date = "2024-05-17T13:10:50.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

