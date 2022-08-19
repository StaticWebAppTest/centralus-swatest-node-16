module.exports = async function (context, req) {
  const date = "2022-08-19T01:02:50.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

