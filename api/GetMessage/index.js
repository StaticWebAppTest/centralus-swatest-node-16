module.exports = async function (context, req) {
  const date = "2023-09-15T17:07:57.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

