module.exports = async function (context, req) {
  const date = "2024-03-17T13:10:53.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

