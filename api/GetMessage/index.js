module.exports = async function (context, req) {
  const date = "2023-11-18T14:07:16.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

