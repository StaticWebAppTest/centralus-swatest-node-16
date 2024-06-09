module.exports = async function (context, req) {
  const date = "2024-06-09T06:13:09.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

