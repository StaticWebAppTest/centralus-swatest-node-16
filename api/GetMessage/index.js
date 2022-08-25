module.exports = async function (context, req) {
  const date = "2022-08-25T01:10:50.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

