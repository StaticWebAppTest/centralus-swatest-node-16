module.exports = async function (context, req) {
  const date = "2023-11-12T07:08:59.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

