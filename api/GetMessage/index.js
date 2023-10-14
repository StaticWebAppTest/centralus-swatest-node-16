module.exports = async function (context, req) {
  const date = "2023-10-14T01:40:38.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

