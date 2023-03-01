module.exports = async function (context, req) {
  const date = "2023-03-01T07:10:00.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

