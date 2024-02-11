module.exports = async function (context, req) {
  const date = "2024-02-11T13:09:27.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

