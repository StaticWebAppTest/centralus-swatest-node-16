module.exports = async function (context, req) {
  const date = "2023-03-06T22:09:52.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

