module.exports = async function (context, req) {
  const date = "2023-07-24T19:07:09.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

