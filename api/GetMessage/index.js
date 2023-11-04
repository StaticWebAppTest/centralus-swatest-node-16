module.exports = async function (context, req) {
  const date = "2023-11-04T13:08:57.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

