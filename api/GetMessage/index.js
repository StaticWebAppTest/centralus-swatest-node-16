module.exports = async function (context, req) {
  const date = "2023-09-09T14:06:50.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

