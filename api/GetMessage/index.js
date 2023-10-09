module.exports = async function (context, req) {
  const date = "2023-10-09T13:14:06.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

