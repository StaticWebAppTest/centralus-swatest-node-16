module.exports = async function (context, req) {
  const date = "2024-04-10T10:09:44.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

