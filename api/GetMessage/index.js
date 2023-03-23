module.exports = async function (context, req) {
  const date = "2023-03-23T05:08:27.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

