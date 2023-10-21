module.exports = async function (context, req) {
  const date = "2023-10-21T23:07:50.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

