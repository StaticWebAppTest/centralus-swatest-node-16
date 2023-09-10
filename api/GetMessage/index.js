module.exports = async function (context, req) {
  const date = "2023-09-10T17:07:20.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

