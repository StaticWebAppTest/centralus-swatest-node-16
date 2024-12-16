module.exports = async function (context, req) {
  const date = "2024-12-16T07:13:14.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

