module.exports = async function (context, req) {
  const date = "2023-08-10T22:07:32.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

