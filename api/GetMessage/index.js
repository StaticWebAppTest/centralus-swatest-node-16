module.exports = async function (context, req) {
  const date = "2023-03-11T04:11:04.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

