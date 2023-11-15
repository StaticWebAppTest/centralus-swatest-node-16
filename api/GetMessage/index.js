module.exports = async function (context, req) {
  const date = "2023-11-15T04:11:23.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

