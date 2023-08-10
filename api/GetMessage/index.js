module.exports = async function (context, req) {
  const date = "2023-08-10T18:10:55.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

