module.exports = async function (context, req) {
  const date = "2023-08-04T13:10:42.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

