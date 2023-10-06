module.exports = async function (context, req) {
  const date = "2023-10-06T11:07:38.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

