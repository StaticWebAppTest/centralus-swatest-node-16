module.exports = async function (context, req) {
  const date = "2023-03-12T04:11:35.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

