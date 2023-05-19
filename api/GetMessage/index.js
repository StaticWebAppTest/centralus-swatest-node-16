module.exports = async function (context, req) {
  const date = "2023-05-19T05:08:32.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

