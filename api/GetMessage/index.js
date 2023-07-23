module.exports = async function (context, req) {
  const date = "2023-07-23T12:15:20.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

