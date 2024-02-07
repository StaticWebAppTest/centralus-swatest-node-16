module.exports = async function (context, req) {
  const date = "2024-02-07T09:09:45.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

