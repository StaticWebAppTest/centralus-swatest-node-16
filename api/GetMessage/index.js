module.exports = async function (context, req) {
  const date = "2023-10-16T06:12:50.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

