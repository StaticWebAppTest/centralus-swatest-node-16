module.exports = async function (context, req) {
  const date = "2023-02-10T07:09:30.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

