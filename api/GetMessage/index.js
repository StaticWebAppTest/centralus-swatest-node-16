module.exports = async function (context, req) {
  const date = "2023-11-04T00:40:50.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

