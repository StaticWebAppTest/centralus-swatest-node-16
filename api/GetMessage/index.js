module.exports = async function (context, req) {
  const date = "2023-02-03T04:11:53.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

