module.exports = async function (context, req) {
  const date = "2023-04-22T06:11:04.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

