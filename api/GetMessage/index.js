module.exports = async function (context, req) {
  const date = "2023-09-04T13:11:11.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

