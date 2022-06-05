module.exports = async function (context, req) {
  const date = "2022-06-05T14:09:45.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

