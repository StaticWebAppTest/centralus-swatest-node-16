module.exports = async function (context, req) {
  const date = "2023-02-21T20:10:54.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

