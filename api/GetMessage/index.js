module.exports = async function (context, req) {
  const date = "2024-08-11T11:08:33.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

