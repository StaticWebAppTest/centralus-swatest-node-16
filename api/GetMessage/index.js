module.exports = async function (context, req) {
  const date = "2023-06-09T13:11:20.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

