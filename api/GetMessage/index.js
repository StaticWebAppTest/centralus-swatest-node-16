module.exports = async function (context, req) {
  const date = "2023-09-03T07:07:28.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

