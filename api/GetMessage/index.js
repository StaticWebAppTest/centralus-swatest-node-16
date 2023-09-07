module.exports = async function (context, req) {
  const date = "2023-09-07T04:10:51.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

