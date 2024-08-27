module.exports = async function (context, req) {
  const date = "2024-08-27T13:15:45.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

