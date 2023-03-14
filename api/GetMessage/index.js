module.exports = async function (context, req) {
  const date = "2023-03-14T23:09:32.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

