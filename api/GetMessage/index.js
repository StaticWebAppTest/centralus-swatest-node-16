module.exports = async function (context, req) {
  const date = "2025-09-23T17:09:54.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

