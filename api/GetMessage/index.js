module.exports = async function (context, req) {
  const date = "2023-07-20T02:02:18.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

