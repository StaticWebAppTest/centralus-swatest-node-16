module.exports = async function (context, req) {
  const date = "2024-03-28T05:10:50.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

