module.exports = async function (context, req) {
  const date = "2023-05-04T23:09:25.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

