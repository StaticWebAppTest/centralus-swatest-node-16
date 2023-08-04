module.exports = async function (context, req) {
  const date = "2023-08-04T06:11:28.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

