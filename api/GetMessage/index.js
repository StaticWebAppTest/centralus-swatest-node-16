module.exports = async function (context, req) {
  const date = "2023-07-01T13:13:52.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

