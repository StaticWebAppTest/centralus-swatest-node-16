module.exports = async function (context, req) {
  const date = "2023-08-15T06:11:00.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

