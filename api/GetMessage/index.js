module.exports = async function (context, req) {
  const date = "2022-08-08T20:12:12.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

