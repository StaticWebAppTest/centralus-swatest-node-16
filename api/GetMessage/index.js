module.exports = async function (context, req) {
  const date = "2023-07-13T01:00:53.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

