module.exports = async function (context, req) {
  const date = "2024-08-09T07:10:14.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

