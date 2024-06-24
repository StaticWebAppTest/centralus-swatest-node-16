module.exports = async function (context, req) {
  const date = "2024-06-24T05:10:22.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

