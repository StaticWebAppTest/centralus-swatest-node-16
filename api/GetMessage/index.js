module.exports = async function (context, req) {
  const date = "2024-07-18T06:14:45.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

