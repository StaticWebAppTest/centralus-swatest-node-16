module.exports = async function (context, req) {
  const date = "2023-10-24T06:12:07.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

