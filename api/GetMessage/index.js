module.exports = async function (context, req) {
  const date = "2023-09-23T14:07:03.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

