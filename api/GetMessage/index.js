module.exports = async function (context, req) {
  const date = "2023-08-12T04:09:30.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

