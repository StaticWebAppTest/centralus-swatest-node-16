module.exports = async function (context, req) {
  const date = "2023-07-15T06:12:17.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

