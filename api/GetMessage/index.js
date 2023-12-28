module.exports = async function (context, req) {
  const date = "2023-12-28T06:12:16.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

