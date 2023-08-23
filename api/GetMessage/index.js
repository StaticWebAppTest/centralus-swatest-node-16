module.exports = async function (context, req) {
  const date = "2023-08-23T01:39:30.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

