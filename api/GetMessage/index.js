module.exports = async function (context, req) {
  const date = "2024-04-19T06:13:10.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

