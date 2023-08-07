module.exports = async function (context, req) {
  const date = "2023-08-07T15:09:05.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

