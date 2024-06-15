module.exports = async function (context, req) {
  const date = "2024-06-15T18:13:18.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

