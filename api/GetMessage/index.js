module.exports = async function (context, req) {
  const date = "2023-09-09T07:07:07.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

