module.exports = async function (context, req) {
  const date = "2023-11-19T13:09:39.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

