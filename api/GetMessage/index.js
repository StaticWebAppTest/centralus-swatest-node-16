module.exports = async function (context, req) {
  const date = "2023-06-10T06:11:03.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

