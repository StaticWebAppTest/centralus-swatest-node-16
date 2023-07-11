module.exports = async function (context, req) {
  const date = "2023-07-11T15:10:27.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

