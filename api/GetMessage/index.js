module.exports = async function (context, req) {
  const date = "2023-09-10T08:09:52.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

