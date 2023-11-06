module.exports = async function (context, req) {
  const date = "2023-11-06T13:13:11.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

