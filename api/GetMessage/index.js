module.exports = async function (context, req) {
  const date = "2024-02-11T04:11:25.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

