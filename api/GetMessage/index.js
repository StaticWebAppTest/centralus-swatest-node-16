module.exports = async function (context, req) {
  const date = "2023-02-27T08:14:04.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

