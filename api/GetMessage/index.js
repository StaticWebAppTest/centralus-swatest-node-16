module.exports = async function (context, req) {
  const date = "2024-01-11T11:08:01.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

