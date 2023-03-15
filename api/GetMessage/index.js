module.exports = async function (context, req) {
  const date = "2023-03-15T06:12:45.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

