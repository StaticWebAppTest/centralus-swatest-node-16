module.exports = async function (context, req) {
  const date = "2024-01-08T19:07:40.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

