module.exports = async function (context, req) {
  const date = "2023-10-18T06:12:20.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

