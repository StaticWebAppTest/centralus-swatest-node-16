module.exports = async function (context, req) {
  const date = "2023-12-04T19:07:43.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

