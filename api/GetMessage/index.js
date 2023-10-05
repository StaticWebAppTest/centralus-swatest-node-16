module.exports = async function (context, req) {
  const date = "2023-10-05T23:09:12.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

