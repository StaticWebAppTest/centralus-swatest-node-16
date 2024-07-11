module.exports = async function (context, req) {
  const date = "2024-07-11T06:14:18.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

