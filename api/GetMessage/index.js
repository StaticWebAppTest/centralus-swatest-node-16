module.exports = async function (context, req) {
  const date = "2023-10-10T06:12:20.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

