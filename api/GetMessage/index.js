module.exports = async function (context, req) {
  const date = "2023-11-15T06:12:30.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

