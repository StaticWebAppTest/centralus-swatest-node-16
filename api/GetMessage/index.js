module.exports = async function (context, req) {
  const date = "2023-03-04T20:09:49.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

