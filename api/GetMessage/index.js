module.exports = async function (context, req) {
  const date = "2024-04-08T06:13:02.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

