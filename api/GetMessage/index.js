module.exports = async function (context, req) {
  const date = "2023-11-18T17:07:23.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

