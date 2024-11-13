module.exports = async function (context, req) {
  const date = "2024-11-13T13:19:19.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

