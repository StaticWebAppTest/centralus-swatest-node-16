module.exports = async function (context, req) {
  const date = "2023-03-09T04:12:30.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

