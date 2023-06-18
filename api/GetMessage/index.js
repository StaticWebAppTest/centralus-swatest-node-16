module.exports = async function (context, req) {
  const date = "2023-06-18T06:10:50.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

