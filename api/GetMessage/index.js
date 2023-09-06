module.exports = async function (context, req) {
  const date = "2023-09-06T15:09:38.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

