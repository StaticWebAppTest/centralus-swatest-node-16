module.exports = async function (context, req) {
  const date = "2023-05-04T06:12:00.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

