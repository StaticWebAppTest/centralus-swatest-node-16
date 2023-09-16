module.exports = async function (context, req) {
  const date = "2023-09-16T23:07:50.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

