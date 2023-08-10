module.exports = async function (context, req) {
  const date = "2023-08-10T17:07:48.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

