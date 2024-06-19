module.exports = async function (context, req) {
  const date = "2024-06-19T08:13:09.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

