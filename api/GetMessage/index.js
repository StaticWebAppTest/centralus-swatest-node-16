module.exports = async function (context, req) {
  const date = "2024-03-19T15:10:13.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

