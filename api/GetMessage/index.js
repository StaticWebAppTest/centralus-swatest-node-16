module.exports = async function (context, req) {
  const date = "2022-10-01T12:23:45.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

