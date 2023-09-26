module.exports = async function (context, req) {
  const date = "2023-09-26T10:09:42.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

