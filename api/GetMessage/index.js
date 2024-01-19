module.exports = async function (context, req) {
  const date = "2024-01-19T15:10:01.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

