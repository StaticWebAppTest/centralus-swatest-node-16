module.exports = async function (context, req) {
  const date = "2023-08-18T06:10:59.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

