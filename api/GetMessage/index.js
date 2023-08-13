module.exports = async function (context, req) {
  const date = "2023-08-13T23:07:38.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

