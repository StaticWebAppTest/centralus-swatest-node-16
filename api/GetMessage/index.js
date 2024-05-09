module.exports = async function (context, req) {
  const date = "2024-05-09T06:13:09.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

