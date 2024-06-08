module.exports = async function (context, req) {
  const date = "2024-06-08T15:10:09.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

