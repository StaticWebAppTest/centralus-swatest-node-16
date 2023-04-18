module.exports = async function (context, req) {
  const date = "2023-04-18T23:09:04.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

