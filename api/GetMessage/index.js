module.exports = async function (context, req) {
  const date = "2023-08-11T08:10:27.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

