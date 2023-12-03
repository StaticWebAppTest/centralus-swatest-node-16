module.exports = async function (context, req) {
  const date = "2023-12-03T04:10:55.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

