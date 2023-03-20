module.exports = async function (context, req) {
  const date = "2023-03-20T08:13:20.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

