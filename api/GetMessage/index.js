module.exports = async function (context, req) {
  const date = "2023-06-06T11:07:10.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

