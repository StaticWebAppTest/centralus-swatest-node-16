module.exports = async function (context, req) {
  const date = "2023-08-10T13:14:06.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

