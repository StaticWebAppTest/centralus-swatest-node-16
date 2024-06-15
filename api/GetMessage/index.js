module.exports = async function (context, req) {
  const date = "2024-06-15T17:09:23.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

