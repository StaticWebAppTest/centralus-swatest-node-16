module.exports = async function (context, req) {
  const date = "2023-06-17T06:11:01.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

