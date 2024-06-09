module.exports = async function (context, req) {
  const date = "2024-06-09T23:10:09.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

