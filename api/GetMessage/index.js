module.exports = async function (context, req) {
  const date = "2023-06-27T15:10:20.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

