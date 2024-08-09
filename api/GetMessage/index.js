module.exports = async function (context, req) {
  const date = "2024-08-09T17:10:14.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

