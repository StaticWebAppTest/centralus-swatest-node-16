module.exports = async function (context, req) {
  const date = "2024-09-22T07:10:02.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

