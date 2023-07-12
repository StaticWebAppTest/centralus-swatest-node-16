module.exports = async function (context, req) {
  const date = "2023-07-12T15:09:50.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

