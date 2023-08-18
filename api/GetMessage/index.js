module.exports = async function (context, req) {
  const date = "2023-08-18T14:07:43.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

