module.exports = async function (context, req) {
  const date = "2023-08-06T11:07:01.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

