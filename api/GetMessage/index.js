module.exports = async function (context, req) {
  const date = "2024-03-23T10:09:10.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

