module.exports = async function (context, req) {
  const date = "2024-02-18T13:09:10.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

